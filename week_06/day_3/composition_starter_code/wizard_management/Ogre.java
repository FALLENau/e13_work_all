package wizard_management;
import behaviours.*;

public class Ogre extends MythicalBeast  implements Flyable {

  public Ogre(String name){
    super(name);
  }

  public String fly(){
    return "Hovering up, straightening out, stalling, stalling hard, fall flat on face!";
  }

}
