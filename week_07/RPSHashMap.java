import java.util.HashMap;

/**
 * Created by Reece on 05/07/2017.
 */

public class Game {
  HashMap<String, String> loserList;

  public Game() {
      this.loserList = new HashMap<>();
      setupHashmap();
  }

  public void setupHashmap(){
      loserList.put("rock","paper");
      loserList.put("paper","scissors");
      loserList.put("scissors","rock");
  }
}
