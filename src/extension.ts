// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { exec } from 'child_process';


// this function converts the currently opened protobuf file to a swagger 2.0 specification
export function convertProtobufToSwagger() {
	const editor = vscode.window.activeTextEditor;


	if (!editor) {
		vscode.window.showErrorMessage('No active editor found.');
		return;
	  }

	const filePath = editor.document.uri.fsPath;
	const folderPath = vscode.workspace.getWorkspaceFolder(editor.document.uri);

  
	const protoFile = editor.document.fileName;
	if (!protoFile.endsWith('.proto')) {
	  vscode.window.showErrorMessage('The active editor is not a Protobuf file.');
	  return;
	}
  
	const swaggerFile = `${protoFile}.json`;
  
	// const protocPath = which.sync('protoc', { nothrow: true });
	// if (!protocPath) {
	//   vscode.window.showErrorMessage('The Protocol Buffers compiler (protoc) is not installed on your system.');
	//   return;
	// }
  
	const command = `protoc --swagger_out=json:${swaggerFile} ${filePath}`;
  
	exec(command, { env: {PATH: `${folderPath}`} }, (error, stdout, stderr) => {
	  if (error) {
		vscode.window.showErrorMessage(`Error: ${error.message}`);
		return;
	  }
	  if (stderr) {
		vscode.window.showErrorMessage(`Error: ${stderr}`);
		return;
	  }
	  vscode.window.showInformationMessage(`Swagger 2.0 specification generated at ${swaggerFile}`);
	});
  }


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "converter" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable0 = vscode.commands.registerCommand('converter.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Converter!'); 
	});

	let disposable1 = vscode.commands.registerCommand('converter.convertProtobufToSwagger', () => {
		convertProtobufToSwagger();
	});

	context.subscriptions.push(disposable0, disposable1);

}


// This method is called when your extension is deactivated
export function deactivate() {}
