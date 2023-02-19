import { container, DependencyContainer } from "tsyringe";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";

class Mod implements IPostDBLoadMod
{
    private modConfig = require("../config/config.json");
    public postDBLoad(container: DependencyContainer): void 
    {
        // get database from server
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");

        // Get all the in-memory json found in /assets/database
        
        const dB = databaseServer.getTables();
        const items = dB.templates.items;
        const config = this.modConfig;
        for (const id in items)
        {
            const base = items[id]
            if (base._parent.includes("5485a8684bdc2da71d8b4567"))
            {
                const str = base._name.split("_", 2)
                if (str[1] == "9x19" || str[1] == "9x18pm" || str[1] == "9x21" || str[1] == "762x25tt" || str[1] == "46x30" || str[1] == "57x28" || str[1] == "1143x23" || str[1] == "9x33r")
                {
                    editSimpleItemData(id, "StackMaxSize", config.Items.AmmoStacks.PistolRound)
                    editSimpleItemData(id, "Weight", config.Items.AmmoStacks.Weight)
                }
                if (str[1] == "12x70" || str[1] == "20x70" || str[1] == "23x75")
                {
                    editSimpleItemData(id, "StackMaxSize", config.Items.AmmoStacks.ShotgunRound)
                    editSimpleItemData(id, "Weight", config.Items.AmmoStacks.Weight)
                }
                if (str[1] == "762x39" || str[1] == "545x39" || str[1] == "556x45" || str[1] == "9x39" || str[1] == "366" || str[1] == "762x35" || str[1] == "300blk" || str[1] == "ATL15")
                {
                    editSimpleItemData(id, "StackMaxSize", config.Items.AmmoStacks.RifleRound)
                    editSimpleItemData(id, "Weight", config.Items.AmmoStacks.Weight)
                }
                if (str[1] == "762x51" || str[1] == "762х54R" || str[1] == "762x54r" || str[1] == "86x70" || str[1] == "127x55")
                {
                    editSimpleItemData(id, "StackMaxSize", config.Items.AmmoStacks.MarksmanRound)
                    editSimpleItemData(id, "Weight", config.Items.AmmoStacks.Weight)
                }
                if (str[2] == "10MM" || str[2] == "40SW" || str[2] == "357SIG" || str[2] == "9MM" || str[2] == "45ACP" || str[2] == "50AE" || str[2] == "380AUTO")
                {
                    editSimpleItemData(id, "StackMaxSize", config.Items.AmmoStacks.PistolRound)
                    editSimpleItemData(id, "Weight", config.Items.AmmoStacks.Weight)
                }
                if (str[2] == "GRENDEL" || str[2] == "50WLF")
                {
                    editSimpleItemData(id, "StackMaxSize", config.Items.AmmoStacks.RifleRound)
                    editSimpleItemData(id, "Weight", config.Items.AmmoStacks.Weight)
                }
                if (str[2] == "BMG" || str[2] == "277")
                {
                    editSimpleItemData(id, "StackMaxSize", config.Items.AmmoStacks.MarksmanRound)
                    editSimpleItemData(id, "Weight", config.Items.AmmoStacks.Weight)
                }
                if (str[2] == "KURZ")
                {
                    editSimpleItemData(id, "StackMaxSize", config.Items.AmmoStacks.RifleRound)
                    editSimpleItemData(id, "Weight", config.Items.AmmoStacks.Weight)
                }
            }
            // CURRENCY
            if (base._parent.includes("543be5dd4bdc2deb348b4569") && config.Items.currency.enabled === true)
            {
                editSimpleItemData(id, "StackMaxSize", config.Items.currency.stackLimit)
            }
        }

        // VALUEABLES
        if (config.Items.valueables.enabled === true)
        {
            // Stack Modification
            items["59faff1d86f7746c51718c9c"]._props.StackMaxSize = config.Items.valueables.stackLimit; // Bitcoin
            items["5d235b4d86f7742e017bc88a"]._props.StackMaxSize = config.Items.valueables.stackLimit; // GP Coin
        }
        function editSimpleItemData(id, data, value)
        {
            if (isNaN(value) && value !== "true" && value !== "false")
            {
                items[id]._props[data] = value
            }
            else
            {
                items[id]._props[data] = JSON.parse(value)
            }
        }
    }
}
// Logging to console for successful injection
const logger = container.resolve<ILogger>("WinstonLogger");

logger.logWithColor("LOADING: BRAMMERN BIGGER STACKS 0.1.5",LogTextColor.YELLOW);


module.exports = { mod: new Mod() }