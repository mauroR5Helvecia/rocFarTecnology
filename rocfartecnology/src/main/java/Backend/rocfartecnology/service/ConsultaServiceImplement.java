package Backend.rocfartecnology.service;

import Backend.rocfartecnology.entity.Consulta;
import Backend.rocfartecnology.repository.ConsultaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsultaServiceImplement implements ConsultaServiceI{


    @Autowired
    private ConsultaRepository consultaRepository;

    @Override
    public List<Consulta> getConsultas() {

        List<Consulta> listaConsulta = consultaRepository.findAll();
        return listaConsulta;
    }

    @Override
    public void save(Consulta consulta) {
        consultaRepository.save(consulta);
    }

    @Override
    public void deleteConsulta(Long id) {
        consultaRepository.deleteById(id);
    }
}
