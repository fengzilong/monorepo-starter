import { type ActionType, type NodePlopAPI } from 'plop';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function (plop: NodePlopAPI) {
  plop.setGenerator('package', {
    description: 'Create a new package',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the package?',
      },
      {
        type: 'input',
        name: 'author',
        message: 'What is the author of the package?',
        default: 'fengzilong',
      },
      {
        type: 'rawlist',
        name: 'license',
        message: 'What is the license of the package?',
        default: 'MIT',
        choices: ['MIT', 'Apache-2.0'],
      }
    ],
    actions: (data) => {
      const actions: ActionType[] = [];

      actions.push(
        {
          type: 'addMany',
          base: path.join(__dirname, 'templates/package'),
          templateFiles: path.join(__dirname, 'templates/package/**/*'),
          destination: 'packages/{{name}}',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: 'packages/{{name}}/LICENSE',
          templateFile: path.join(__dirname, 'templates/licenses/{{license}}'),
          abortOnFail: true,
        }
      )

      if (data?.license === 'Apache-2.0' && data?.name) {
        actions.push({
          type: 'add',
          path: 'packages/{{name}}/NOTICE',
          templateFile: path.join(__dirname, 'templates/licenses/Apache-2.0-NOTICE'),
          abortOnFail: true,
        })
      }

      return actions;
    },
  });
}