import { container, DependencyContainer } from "tsyringe";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

class Mod implements IPostDBLoadMod
{
    private modConfig = require("../config/config.json");
    public postDBLoad(container: DependencyContainer): void 
    {
        // get database from server
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");

        // Get all the in-memory json found in /assets/database
        const tables = databaseServer.getTables();
        const items = tables.templates.items;
        const config = this.modConfig;

        // Allowing bigger ammo stacks
        if (config.stacks.ninepst.stackable === true)
        {
            items["56d59d3ad2720bdb418b4577"]._props.StackMaxSize = config.stacks.ninepst.stackLimit;
        }

        // Find the ledx item by its Id
        //const ledx = tables.templates.items["5c0530ee86f774697952d952"];

        // Update one of its properties to be true
        //ledx._props.CanSellOnRagfair = true;


        // example #2
        // get globals settings and set flea market min level to be 1
        //tables.globals.config.RagFair.minUserLevel = 1;
    }
}
// Logging to console for successful injection
const logger = container.resolve<ILogger>("WinstonLogger");

logger.info("Loading: BrammerN-AmmoStacks");


module.exports = { mod: new Mod() }