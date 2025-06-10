// /Users/user/Desktop/Core Guild Project/projects/colabs/eng-teams/core/personal-website/prototype/test_mcp.js

const { spawn } = require('child_process');

// Create connection with MCP server
const server = spawn('npx', ['-y', '@supabase/mcp-server-supabase@latest'], {
  stdio: ['pipe', 'pipe', 'pipe'],
  env: { ...process.env, SUPABASE_ACCESS_TOKEN: process.env.SUPABASE_ACCESS_TOKEN }
});

// Function to send JSON-RPC message
function sendRequest(method, params = {}) {
  const request = {
    jsonrpc: "2.0",
    id: 1,
    method: method,
    params: params
  };
  
  server.stdin.write(JSON.stringify(request) + '\n');
}

// Initialize connection
sendRequest('initialize', {
  protocolVersion: "2024-11-05",
  capabilities: {},
  clientInfo: { name: "test-client", version: "1.0.0" }
});

// List available tools
setTimeout(() => {
  sendRequest('tools/list');
}, 1000);

// List projects
setTimeout(() => {
  sendRequest('tools/call', {
    name: 'list_projects',
    arguments: {}
  });
}, 2000);

// Capture output
server.stdout.on('data', (data) => {
  console.log('Response:', data.toString());
});

server.stderr.on('data', (data) => {
  console.error('Error:', data.toString());
});

// Finish after 5 seconds
setTimeout(() => {
  server.kill();
  process.exit(0);
}, 5000); 