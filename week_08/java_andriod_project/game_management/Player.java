//MainPlayer/player1
package game_management;

public class Player {
  private String name;
  private Hand[] Player;

  public Player(String name) {
    this.name = name;
    this.Player = new Hand[3];
  }


  public String getName(){
    return this.name;
    }

    public int cardCount() {
      int numberOfPeople = 0;

      for (Card card : this.hand) {
        if (card != null) {
            numberOfCards++;
        }
      }
      return numberOfCards;
    }
}
