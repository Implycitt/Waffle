import { REST, Routes } from "discord.js";
import { commands } from "./commands";
import { config } from "./config";

const commandsData = Object.values(commands).map((command) => command.data);

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

type DeployCommandsProps = {
  guildID: string;
};

export async function deployCommands({ guildID }: DeployCommandsProps) {
  try {
    console.log("trying");
    await rest.put(
      Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, guildID),
      {
        body: commandsData,
      }
    );
    console.log("success");
  } catch (error) {
    console.log(error);
  }
}
