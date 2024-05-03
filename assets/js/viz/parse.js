export function meteoriteLandings(row) {
    // noinspection JSUnresolvedVariable
    return {
        id: +row.id,
        name: row.name,
        class: row.recclass,
        mass: +row.mass,
        fall: row.fall,
        year: +row.year,
        latitude: +row.reclat,
        longitude: +row.reclong,
        country: row.country
    }
}
