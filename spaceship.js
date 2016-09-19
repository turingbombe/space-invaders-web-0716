class Spaceship {

  constructor(name, crew, phasers, shields){
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'
    if(this.crew.length == 0){
      this.docked = true
    }
    else{
      this.docked = false
    }

    for(var i=0; i< crew.length; i++){
      crew[i].currentShip = this
    }
  }


}