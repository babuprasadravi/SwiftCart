import bcrypt from 'bcryptjs';

const users = [
    {
        name : "Admin User",
        email : 'admin@email.com',
        password : bcrypt.hashSync('admin@123', 10),
        isAdmin : true,
    },
    {
        name : "Babu Prasad",
        email : 'babuprasad784@gmail.com',
        password : bcrypt.hashSync('babu@123', 10),
        isAdmin : false,
    },
    {
        name : "Arvinth",
        email : 'arvint@gmail.com',
        password : bcrypt.hashSync('arvint@123', 10),
        isAdmin : false,
    },
];

export default users;
