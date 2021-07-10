export const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME,
  dateStrings: 'date',
}
