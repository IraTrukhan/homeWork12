function updateLight(currentColorLight){
    switch (currentColorLight.toLowerCase()) {
        case 'red':
          return('green');
        case 'yellow':
          return( 'red' );
        case 'green':
          return( 'yellow' );
        default:
          return false;
      }
}
let changeLight = updateLight(prompt('Enter current state of the light', 'red'));
changeLight ? alert ('Next light - ' + changeLight) : alert ('Error');