import mongoose, { Schema } from "mongoose";

const gameSchema = new Schema(
  {
    name: String,
    srcGame: String,
    srcThumbnail: String,
    key: String,
  },
  {
    timestamps: true,
  }
);

const Game = mongoose.models.Game || mongoose.model('Game', gameSchema);

export default Game;