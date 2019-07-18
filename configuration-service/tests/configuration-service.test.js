const configurationService = require('../configuration-service');
const fixture = require('./configuration-service-fixtures.json');

test('resolveNestedConfigurartion', () => {
    resolvedConfiguration = configurationService.getResolvedConfiguration(201);
    expect(resolvedConfiguration).toEqual(fixture);
});
