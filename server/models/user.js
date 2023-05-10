// User model for lucid
const db = require("../db");
const bcrypt = require("bcrypt");

class User {
    // Authenticate user with username and password
    static async authenticate(username, password) {
        const result = await db.query(
            `SELECT username
                    password,
                    name as "name",
             FROM users
             WHERE username = $1`,
            [username],
        );

        const user = result.rows[0];

        // Bcrypt Authentication 
    }

    // Update User

    // Delete User 
}


module.exports = User;  