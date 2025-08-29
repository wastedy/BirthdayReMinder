import 'dotenv/config';

// Simple test command
const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const TEST_COMMAND2 = {
  name: 'test2',
  description: 'Basic command2',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const CREATE_COMMAND = {
  name: 'criar',
  description: 'Criar um futuro aniversariante',
  type: 4,
  contexts: [0, 1, 2]
}

export const ALL_COMMANDS = [TEST_COMMAND, TEST_COMMAND2, CREATE_COMMAND];
