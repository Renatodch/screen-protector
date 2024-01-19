import "./scss/style.scss";
import AnimationColorController from "./animation-color";
import AnimationMoveController from "./animation-move";

main();

function main() {
  const animationColorController = new AnimationColorController(10, "notes");
  const animationMoveController = new AnimationMoveController("notes");
  animationColorController.startAnimation();
  animationMoveController.moveNotes();
}
