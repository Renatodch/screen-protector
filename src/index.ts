import AnimationColorController from "./animation-color";
import AnimationMoveController from "./animation-move";
import "./css/style.css";

main();

function main() {
  const animationColorController = new AnimationColorController(10, "notes");
  const animationMoveController = new AnimationMoveController("notes");
  animationColorController.startAnimationColor();
  animationMoveController.startAnimationMove();
}
