import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

const AppdataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5020,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

AppdataSource.initialize()
  .then(() => {
    console.log("연결성공!!!");
  })
  .catch(() => {
    console.log("연결실패!!!");
  });
