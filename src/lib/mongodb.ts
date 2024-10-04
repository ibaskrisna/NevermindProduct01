import { MongoClient } from 'mongodb';

// Mengecek apakah variabel lingkungan MONGODB_URI tersedia
if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

// URL koneksi MongoDB dari environment variable
const uri = process.env.MONGODB_URI;
const options = {};

// Deklarasi variabel client dan clientPromise
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Untuk memastikan penggunaan satu koneksi (singleton), terutama pada environment seperti serverless (Next.js atau AWS Lambda)
if (process.env.NODE_ENV === 'development') {
    // Jika dalam mode development, simpan MongoClient ke variabel global untuk mencegah instansiasi ulang di setiap refresh
    if (!(global as any)._mongoClientPromise) {
        client = new MongoClient(uri, options);
        (global as any)._mongoClientPromise = client.connect();
    }
    clientPromise = (global as any)._mongoClientPromise;
} else {
    // Pada mode production, buat client baru
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

// Ekspor clientPromise agar bisa digunakan di aplikasi
export default clientPromise;
