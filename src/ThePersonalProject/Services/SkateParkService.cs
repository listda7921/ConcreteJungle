using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ThePersonalProject.Infastructure;
using ThePersonalProject.Models;
using ThePersonalProject.Services.Models;

namespace ThePersonalProject.Services
{
    public class SkateParkService
    {
        private SkateParkRepository _parkRepo;

        public SkateParkService(SkateParkRepository parkRepo) {
            _parkRepo = parkRepo;
        }

        public ICollection<SkateParkDTO> FindParks()
        {
            return (from p in _parkRepo.List()
                    select new SkateParkDTO
                    {
                        Id = p.Id,
                        Name = p.Name,
                        Location = p.Location
                    }).ToList();
        }

        public void NewSpot(SkateParkDTO skateSpot)
        {
            var newSkatePark = new SkatePark() {
                Name = skateSpot.Name,
                Location = skateSpot.Location
            };
            _parkRepo.Add(newSkatePark);
            _parkRepo.SaveChanges();
            
        }
    }
}
