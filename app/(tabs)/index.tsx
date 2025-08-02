import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { searchBooks } from '../../services/bookApi';

const categories = ['Comics', 'Novels', 'Stories', 'Classic', 'Kids'];

interface Book {
    id: string;
    title: string;
    type: string;
    image: string | null;
    author: string;
    description: string;
}

const Home = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const booksData = await searchBooks('programming'); // Initial search
                setBooks(booksData);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.head}>Bookshelf</Text>
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.headerRow}>
                    <Text style={styles.popular}>Popular now</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAll}>See all</Text>
                    </TouchableOpacity>
                </View>

                {/* Categories */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
                    {categories.map((category, index) => (
                        <TouchableOpacity key={index} style={styles.categoryButton}>
                            <Text style={styles.categoryText}>{category}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Books */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.booksContainer}>
                    {books.map((book) => (
                        <TouchableOpacity key={book.id} style={styles.bookCard}>
                            <Image 
                                source={book.image ? { uri: book.image } : require('../../assets/images/icon.png')}
                                style={styles.bookImage}
                                contentFit="cover"
                                transition={200}
                                placeholder={require('../../assets/images/icon.png')}
                            />
                            <Text style={styles.bookTitle} numberOfLines={2}>{book.title}</Text>
                            <Text style={styles.bookType}>{book.type}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        backgroundColor: "#ff9980",
        padding: 15,
    },
    head: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: "center",
        color: "#000",
    },
    contentContainer: {
        padding: 15,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    popular: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    seeAll: {
        color: '#ff9980',
        fontSize: 16,
    },
    categoriesContainer: {
        marginBottom: 20,
    },
    categoryButton: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    categoryText: {
        fontSize: 16,
    },
    booksContainer: {
        marginTop: 10,
    },
    bookCard: {
        width: 160,
        marginRight: 15,
    },
    bookImage: {
        width: 160,
        height: 200,
        borderRadius: 10,
        marginBottom: 8,
    },
    bookTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    bookType: {
        fontSize: 14,
        color: '#666',
    },
});
