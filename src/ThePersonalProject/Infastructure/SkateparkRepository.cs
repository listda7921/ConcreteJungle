using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ThePersonalProject.Models;

namespace ThePersonalProject.Infastructure
{
    public class SkateParkRepository: GenericRepository<SkatePark>
    {
        public SkateParkRepository(ApplicationDbContext db) :base (db) { }
    }
}
