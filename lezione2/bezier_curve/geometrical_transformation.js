function traslateCurve(fxt, fyt, dx, dy){
//sposta la curva di un vettore (dx,dy)
    for(let i=0; i<fxt.length; i++){
        fxt[i] += dx
        fyt[i] += dy 
    }
}

function rotateCurve(fxt, fyt){
    center_x = fxt[0]
    center_y = fxt[0]
    angleDegrees = 10
//ruota la curva di un angolo theta rispetto a un punto
    let angleRad = angleDegrees * Math.PI / 180; 
    let cos = Math.cos(angleRad)
    let sin = Math.sin(angleRad)

    for(let i=0; i<fxt.length; i++){
        let dx = fxt[i] - center_x
        let dy = fyt[i] - center_y

        fxt[i] = center_x + dx * cos - dy * sin
        fyt[i] = center_y + dx * sin + dy * cos 
    }
}

function scaleCurve(fxt, fyt){
    center_x = fxt[0]
    center_y = fyt[0]
    scalefactor = 10
//ingrandisce o rimpicciolisce la curva
    for(let i=0; i<fxt.length; i++){
        fxt[i] = center_x + (fxt[i] - center_x) * scalefactor
        fyt[i] = center_y + (fyt[i] - center_y) * scalefactor
    }
}

function panning(fxt, fyt){
//sposta la telecamera
}