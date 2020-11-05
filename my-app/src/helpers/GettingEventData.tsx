import { getLogs } from '@colony/colony-js';
const eventFilter = colonyClient.filters.PayoutClaimed();
const eventLogs = await getLogs(colonyClient, eventFilter);
