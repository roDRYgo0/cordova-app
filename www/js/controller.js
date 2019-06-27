$( document ).ready(function() {
    $("#fahrenheit").on('keyup', function(){
        var fahrenheit = $(this).val()
        var celcious = (fahrenheit - 32)*5/9
        celcious = Math.round(celcious * 100) / 100
        $('#celcious').text("Celsius: "+celcious+"º")
    });

    $("#sbruto").on('keyup', function(){
        var renta = $(this).val() * 0.10
        var afp = $(this).val() * 0.06
        var isss = $(this).val() * 0.03
        var neto = $(this).val() - renta -afp - isss
        neto = Math.round(neto * 100) / 100
        $('#sneto').text("Sueldo neto:  $"+neto+"")
    });

    $( "#nota_final" ).submit(function( event ) {
        event.preventDefault();
        var tarea = $('#tarea').val() *0.20
        var portafolio = $('#portafolio').val() * 0.25
        var laboratorio = $('#laboratorio').val() * 0.25
        var examen = $('#examen').val() * 0.30
        var nota = tarea + portafolio + laboratorio + examen
        $('#nfinal').text("Nota final: "+nota)
    });

    $( "#inversion" ).submit(function( event ) {
        event.preventDefault();
        var p1 = parseFloat($('#persona1').val())
        var p2 = parseFloat($('#persona2').val() )
        var p3 = parseFloat($('#persona3').val())
        var total = p1 + p2 + p3
        p1 = p1 / total
        p2 = p2 / total
        p3 = p3 / total
        $('#ifinal').text("Inversión final: $"+total)
        $('#pp1').text("Porcentaje persona 1: "+Math.round((p1*100) * 100) / 100+"%")
        $('#pp2').text("Porcentaje persona 2: "+Math.round((p2*100) * 100) / 100+"%")
        $('#pp3').text("Porcentaje persona 3: "+Math.round((p3*100) * 100) / 100+"%")
    });

    $( "#area_perimetro" ).submit(function( event ) {
        event.preventDefault();
        var area, perimetro
        switch($('#figura').val()){
            case 'tri':
                var l1 = parseFloat($('#tl1').val())
                var l2 = parseFloat($('#tl2').val())
                var l3 = parseFloat($('#tl3').val())
                perimetro = l1 + l2 + l3
                var s = perimetro / 2
                area = Math.sqrt(s*(s-l1)*(s-l2)*(s-l3))
                $('#area').text("Area: "+Math.round(area * 100)/100)
                $('#perimetro').text("Perimetro: "+Math.round(perimetro * 100)/100)
                break;
            case 'cir':
                var radio = parseFloat($('#cradio').val())
                area = Math.PI*Math.pow(radio, 2)
                perimetro = 2*Math.PI*radio
                $('#area').text("Area: "+Math.round(area * 100)/100)
                $('#perimetro').text("Perimetro: "+Math.round(perimetro * 100)/100)
                break;
            case 'tra':
                var l1 = parseFloat($('#tral1').val())
                var l2 = parseFloat($('#tral2').val())
                var l3 = parseFloat($('#tral3').val())
                var l4 = parseFloat($('#tral4').val())
                var b = parseFloat($('#b').val())
                var ba = parseFloat($('#ba').val())
                var h = parseFloat($('#h').val())
                area = ((ba+b)*h)/2
                perimetro = l1 + l2 + l3 + l4
                $('#area').text("Area: "+Math.round(area * 100)/100)
                $('#perimetro').text("Perimetro: "+Math.round(perimetro * 100)/100)
                break;
            case 'rom':
                var l1 = parseFloat($('#rol1').val())
                var l2 = parseFloat($('#rol2').val())
                var d1 = parseFloat($('#d1').val())
                var d2 = parseFloat($('#d2').val())
                area = (d1 * d2)/2
                perimetro = l1 + l1 + l2 + l2
                $('#area').text("Area: "+Math.round(area * 100)/100)
                $('#perimetro').text("Perimetro: "+Math.round(perimetro * 100)/100)
                break;
        }
    });

    $("#figura").change(function(){
        var content = '';
        switch($(this).val()){
            case 'tri':
                content = `
                <div class="form-row justify-content-center">
                    <div class="col-4">
                        <label for="tl1">Lado 1</label>
                        <input type="number" class="form-control" id="tl1" placeholder="Lado" min="0" required>                            
                    </div>
                    <div class="col-4">
                        <label for="tl2">Lado 2</label>
                        <input type="number" class="form-control" id="tl2" placeholder="Lado" min="0" required>                            
                    </div>
                    <div class="col-4">
                        <label for="tl3">Lado 3</label>
                        <input type="number" class="form-control" id="tl3" placeholder="Lado" min="0" required>                            
                    </div>
                    </div>
                    <br><br>
                    <div class="row justify-content-center">
                        <button type="submit" class="btn btn-secondary col-5">Calcular</button>
                </div>
                `;
                $('#content').html(content)
                break;
            case 'cir':
                content = `
                <div class="form-row justify-content-center">
                    <div class="col-8">
                        <label for="cradio">Radio</label>
                        <input type="number" class="form-control" id="cradio" placeholder="Radio" min="0" required>                            
                    </div>
                    </div>
                    <br><br>
                    <div class="row justify-content-center">
                        <button type="submit" class="btn btn-secondary col-5">Calcular</button>
                </div>
                `;
                $('#content').html(content)
                break;
            case 'tra':
                content = `
                <div class="form-row justify-content-center">
                        <div class="col-6">
                            <label for="tral1">Lado 1</label>
                            <input type="number" class="form-control" id="tral1" placeholder="Lado 1" min="0" required>                            
                        </div>
                        <div class="col-6">
                            <label for="tral2">Lado 2</label>
                            <input type="number" class="form-control" id="tral2" placeholder="Lado 2" min="0" required>                            
                        </div>
                        <div class="col-6">
                            <label for="tral3">Lado 3</label>
                            <input type="number" class="form-control" id="tral3" placeholder="Lado 3" min="0" required>                            
                        </div>
                        <div class="col-6">
                            <label for="tral4">Lado 4</label>
                            <input type="number" class="form-control" id="tral4" placeholder="Lado 4" min="0" required>                            
                        </div>
                    </div>
                    <br>
                    <div class="form-row justify-content-center">
                        <div class="col-4">
                            <label for="b">b</label>
                            <input type="number" class="form-control" id="b" placeholder="b" min="0" required>                            
                        </div>
                        <div class="col-4">
                            <label for="ba">B</label>
                            <input type="number" class="form-control" id="ba" placeholder="B" min="0" required>                            
                        </div>
                        <div class="col-4">
                            <label for="h">h</label>
                            <input type="number" class="form-control" id="h" placeholder="h" min="0" required>                            
                        </div>
                    </div>
                    <br><br>
                    <div class="row justify-content-center">
                        <button type="submit" class="btn btn-secondary col-5">Calcular</button>
                </div>
                `;
                $('#content').html(content)
                break;
            case 'rom':
                content = `
                <div class="form-row justify-content-center">
                    <div class="col-6">
                        <label for="rol1">Lado 1</label>
                        <input type="number" class="form-control" id="rol1" placeholder="Lado 1" min="0" required>                            
                    </div>
                    <div class="col-6">
                        <label for="rol2">Lado 2</label>
                        <input type="number" class="form-control" id="rol2" placeholder="Lado 2" min="0" required>                            
                    </div>
                    </div>
                    <br>
                    <div class="form-row justify-content-center">
                        <div class="col-4">
                            <label for="d1">Diagonal 1</label>
                            <input type="number" class="form-control" id="d1" placeholder="d1" min="0" required>                            
                        </div>
                        <div class="col-4">
                            <label for="d2">Diagonal 2</label>
                            <input type="number" class="form-control" id="d2" placeholder="d2" min="0" required>                            
                        </div>
                    </div>
                    <br><br>
                    <div class="row justify-content-center">
                        <button type="submit" class="btn btn-secondary col-5">Calcular</button>
                </div>
                `;
                $('#content').html(content)
                break;
            case 'null':
                content = ''
                $('#content').html(content)
                break;
            }
            $('#area').text("Area: ")
            $('#perimetro').text("Perimetro: ")
    });

    $("#operacion").change(function(){
        switch($(this).val()){
            case 'modulo':
                $('#lab2').text("")
                $('#num2').prop('disabled', true)
                break;
            case 'pote':
                $('#lab2').text("Potencia")
                $('#num2').prop('disabled', false)
                $("#num2").prop('required',true);
                break;
            case 'cuadrada':
                $('#lab2').text("")
                $('#num2').prop('disabled', true)
                $("#num2").prop('required',false);
                break;
            case'cubica':
                $('#lab2').text("")
                $('#num2').prop('disabled', true)
                $("#num2").prop('required',false);
                break;
            default:
                $('#lab1').text("Número 1")
                $('#lab2').text("Número 2")
                $('#num1').prop('disabled', false)
                $('#num2').prop('disabled', false)
                $("#num2").prop('required',true);
                break;
        }
    });

    $( "#calcu" ).submit(function( event ) {
        event.preventDefault();
        var num1 = parseFloat($('#num1').val())
        var num2 = parseFloat($('#num2').val())
        var result
        switch($('#operacion').val()){
            case 'suma':
                result = num1 + num2
                break;
            case 'resta':
                result = num1 - num2
                break;
            case 'multi':
                result = num1 * num2
                break;
            case 'divi':
                result = num1 / num2
                break;
            case 'modulo':
                if(num1>0)
                    result = num1
                else
                    result = num1 * -1
                break;
            case 'pote':
                result = Math.pow(num1, num2)
                break;
            case 'cuadrada':
                result = Math.sqrt(num1)
                break;
            case'cubica':
                result = Math.pow(num1, (1/3))
                break;
        }
        $('#rescalc').text("Resultado: "+Math.round(result * 100)/100)
    })

    $( "#boleto" ).submit(function( event ) {
        event.preventDefault();
        var dias = parseFloat($('#dias').val())
        var distancia = parseFloat($('#distancia').val())*2
        var precio = distancia * 0.15
        if(dias>10 && distancia > 300){
            precio = precio - (precio*0.3)
        }
        $('#preciob').text("Precio de boleto: $"+Math.round(precio * 100)/100)

    })

    $( "#salarios" ).submit(function( event ) {
        event.preventDefault();
        var salario = parseFloat($('#salario').val())
        var incremento
        var nsalario 

        if(salario < 300){
            incremento = 0.12
            nsalario = salario + (salario*incremento)
        }else if(salario >= 300 && salario <= 500){
            incremento = 0.08
            nsalario = salario + (salario*incremento)
        }else if(salario > 500 && salario <= 800){
            incremento = 0.07
            nsalario = salario + (salario*incremento)
        }else if(salario > 800){
            incremento = 0.06
            nsalario = salario + (salario*incremento)            
        }

        $('#nsalario').text("Tu salario es de: $"+Math.round(nsalario * 100)/100)
        $('#incremento').text("Con un incremento de "+Math.round((incremento*100) * 100)/100+"%")

    })


    $( "#tipo_triangulo" ).submit(function( event ) {
        event.preventDefault();
        var lado1 = parseFloat($('#tt1').val())
        var lado2 = parseFloat($('#tt2').val())
        var lado3 = parseFloat($('#tt3').val())

        
        
        $('#preciob').text("Precio de boleto: $"+Math.round(precio * 100)/100)

    })

});