import static org.junit.Assert.*;
import org.junit.*;

import org.mockito.*;
import static org.mockito.Mockito.*;

public class GameTest {

  Game game;
  Rollable dice;

  @Before
  public void before(){
    dice = mock(Rollable.class);
    game = new Game(dice);
  }

  @Test
  public void testTakeTurn(){
    when(dice.roll()).thenReturn(3);

    boolean result = game.nextTurn();
    assertEquals(true, result);
  }

}
