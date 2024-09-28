package Backend.rocfartecnology.service;

import Backend.rocfartecnology.entity.Consulta;

import java.util.List;

public interface ConsultaServiceI {

    public List<Consulta> getConsultas ();

    public void save (Consulta consulta);

    public void deleteConsulta (Long id);

}
