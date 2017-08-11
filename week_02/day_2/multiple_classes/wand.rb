class Wand

  attr_reader(:wood, :core)

  def initialize(wood, core)
    @wood = wood
    @core = core
  end

  def cast_spell(spell_name)
    if @wood == "holly" && @core == "pheonix feather"
      return spell_name.upcase
    else
      return spell_name
    end
  end


end
