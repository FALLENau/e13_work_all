public class Bear {

  private String name;
  private Salmon[] belly;

  public Bear(String name) {
    this.name = name;
    this.belly = new Salmon[5];
  }

  public String getName() {
    return this.name;
  }

  public int foodCount() {
    int numberOfSalmon = 0;

    for (Salmon salmon : this.belly) {
      if (salmon != null) {
          numberOfSalmon++;
      }
    }

    return numberOfSalmon;
  }

  public void eat(Salmon salmon) {
    if (isBellyFull()) {
      return;
    }
    int index = foodCount();
    this.belly[index] = salmon;
  }

  public boolean isBellyFull() {
    return foodCount() == this.belly.length;
  }

  public void sleep() {
    for (int i = 0; i < this.belly.length; i++) {
      this.belly[i] = null;
    }
  }
}
