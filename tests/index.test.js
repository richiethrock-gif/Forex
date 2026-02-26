const { execSync } = require('child_process');

describe('CLI Tool Tests', () => {
    test('should execute command without error', () => {
        const result = execSync('node your-cli-tool.js --your-command').toString();
        expect(result).toContain('Expected Output');
    });

    test('should display help message', () => {
        const result = execSync('node your-cli-tool.js --help').toString();
        expect(result).toContain('Usage: your-cli-tool');
    });

    test('should handle invalid command', () => {
        expect(() => {
            execSync('node your-cli-tool.js --invalid-command');
        }).toThrow();
    });
});