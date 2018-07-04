import client from './db';

client.query(
  "CREATE TABLE IF NOT EXISTS requests(id UUID PRIMARY KEY, ride_id UUID REFERENCES ride_offers(id) ON DELETE CASCADE, user_id UUID not null, status request_status DEFAULT 'pending')",
  (err, res) => {
    console.log(err, res);
    client.end();
    process.exit();
  },
);
