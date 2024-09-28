package Backend.rocfartecnology.controller;

import Backend.rocfartecnology.entity.Consulta;
import Backend.rocfartecnology.service.ConsultaServiceI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rocfar/consulta")
@CrossOrigin(origins = "*")
public class ConsultaController {


@Autowired
private ConsultaServiceI consultaServiceI;


    @PostMapping("/saveConsulta")
    public ResponseEntity<String> crearConsulta( @RequestParam(name = "nombre") String nombre,
                                                 @RequestParam(name = "email") String email,
                                                 @RequestParam(name = "consulta") String consulta){


        Consulta consultaCreada = new Consulta();

        consultaCreada.setNombre(nombre);
        consultaCreada.setEmail(email);
        consultaCreada.setConsulta(consulta);

        consultaServiceI.save(consultaCreada);
        return ResponseEntity.status(HttpStatus.CREATED).body("Su consulta ah sido recibida con exito, a la brevedad le responderemos al email ingresado");
    }

    @GetMapping("/traerconsultas")
    public ResponseEntity<List<Consulta>> getConsulta(){
        return ResponseEntity.ok(consultaServiceI.getConsultas());
    }



    @GetMapping("/probando")
    public ResponseEntity<String> getPrueba(){
        return ResponseEntity.ok("Probando probando");
    }


}
