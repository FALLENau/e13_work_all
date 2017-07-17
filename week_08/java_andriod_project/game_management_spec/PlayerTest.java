//MainPlayerTest
import static org.junit.Assert.*;
import org.junit.*;
import game_management.*;

public class PlayerTest {

  Player player;

  @Before
  public void before() {
    player = new Player("Upul");
  }

  @Test
  public void playerHasName() {
    assertEquals("Upul", player.getName());
  }

}
