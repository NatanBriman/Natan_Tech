import Manufacturer from '../Models/Manufacturer.js';
import manufacturersRepository from '../Repositories/ManufacturersRepository';

const ManufacturersService = {
  getAllManufacturers() {
    return manufacturersRepository.findAll();
  },
  getManufacturersByName(name) {
    return manufacturersRepository.findByName(name);
  },
  addManufacturer(manufacturer) {
    const newManufacturer = new Manufacturer(manufacturer);

    return manufacturersRepository.save(newManufacturer);
  },
};

export default ManufacturersService;
