using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace BakuBusBackEnd.Controllers
{
    [Route("api/buses")]
    [ApiController]
    public class BakuBusController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<String>> get()
        {
            HttpClient httpClient = new HttpClient();
            
            var json = await httpClient
                .GetStringAsync("https://www.bakubus.az/az/ajax/apiNew1");
            dynamic jtoken = JToken.Parse(json);
            foreach(var item in jtoken.BUS)
            {
                item["@attributes"].LATITUDE = 
                    Convert.ToString(item["@attributes"].LATITUDE).Replace(',', '.');
                item["@attributes"].LONGITUDE =
                    Convert.ToString(item["@attributes"].LONGITUDE).Replace(',', '.');
            }
            return JsonConvert.SerializeObject(jtoken);
        }
    }
}