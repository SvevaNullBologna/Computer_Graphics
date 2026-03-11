

function translate(point, dx, dy, dz){
    point.x += dx
    point.y += dy
    point.z += dz
}

function rotate(point, angleDegrees){
    let angleRad = angleDegrees * Math.PI / 180;
    let cos = Math.cos(angleRad)
    let sin = Math.sin(angleRad)

    let old_x = point.x ; 
    let old_y = point.y ; 

    point.x = old_x * cos - old_y * sin 
    point.y = old_x * sin + old_y * cos  
}

function scale(point, factor){
    point.x *= factor 
    point.y *= factor
    point.z *= factor
}