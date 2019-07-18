const configurationService = require('../configuration-service');
const fixture = require('./configuration-service-fixtures.json');
const Benchmark = require('benchmark');

test('resolveNestedConfigurartion', () => {
    resolvedConfiguration = configurationService.getResolvedConfiguration(201);
    expect(resolvedConfiguration).toEqual(fixture);
});
