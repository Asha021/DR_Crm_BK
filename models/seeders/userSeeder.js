// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";
// import dotenv from "dotenv";


// import UserModel from "../UserModel.js";

// dotenv.config();

// export const seedUsers = async () => {
//   try {
//     // Connect DB
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected");

//     // Clear old users
//     await UserModel.deleteMany({});
//     console.log("Old users removed");

//     // Hash password (MANDATORY)
//     const hashedPassword = await bcrypt.hash("1234567899", 10);

//     // Create admin user
//     const adminUser = new UserModel({
//       name: "Admin User",
//       email: "apal66058@gmail.com",
//       password: hashedPassword,
//       role: null,
//       customPermissions: {
//         users: ["create", "read", "update", "delete"],
//         products: ["read", "update"]
//       }
//     });

//     // Save (pre-save hooks WILL run)
//     await adminUser.save();

//     console.log("Admin user seeded successfully");
//     process.exit(0);
//   } catch (error) {
//     console.error("Seeding failed:", error.message);
//     process.exit(1);
//   }
// };


