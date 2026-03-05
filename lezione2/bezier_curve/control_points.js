
            function refresh_scene(context, mycanvas, fxt, fyt){
                context.clearRect(0,0, mycanvas.width , mycanvas.height)
                for (let i = 0; i < fxt.length; i++) {
                    draw_point(fxt[i], fyt[i]);
                    draw_curve(fxt, fyt);
                }
            }
            function is_overing_on_point(mouse_x, mouse_y, fxt, fyt, max_points){
                for(let i=0; i<max_points; i++){
                    if(mouse_x >= fxt[i] - 5 && mouse_x <= fxt[i] + 15 && mouse_y >= fyt[i] - 5 && mouse_y <= fyt[i] + 15){
                        return i 
                    }
                }
                return -1 
            }

            function draw_point(click_x, click_y){
                context.fillStyle = "black"
                context.fillRect(click_x - 5, click_y - 5, 20, 20)
            }
            function draw_curve(fxt,fyt){
                if(fxt.length === max_points){
                    var curve = compute_bezier(fxt, fyt,fxt.length - 1, 1000) 
                    context.beginPath(); 
                    context.moveTo(curve.x[0], curve.y[0])
                    for(let i=1; i<curve.x.length; i++){
                        context.lineTo(curve.x[i], curve.y[i])
                    }

                    context.strokeStyle = "red"
                    context.lineWidth = 2
                    context.stroke()
                }

                
            }