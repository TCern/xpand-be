class PlanetRepository{
    mockPlanets =[
        {name: 'Proxima B', captain: 'rogers', robots: ['arduino'], description: "Not much to see here"},
        {name: 'Proxima C', captain: 'philips', robots: ['r2d2'], description: "A lot to see here"},
        {name: 'X', captain: 'chill', robots: ['b2'], description: "Well this is a nice place"},
        {name: 'Proxima B', captain: 'rogers', robots: ['arduino'], description: "Not much to see here"},
        {name: 'Proxima C', captain: 'philips', robots: ['r2d2'], description: "A lot to see here"},
        {name: 'X', captain: 'chill', robots: ['b2'], description: "Well this is a nice place"},
        {name: 'Proxima B', captain: 'rogers', robots: ['arduino'], description: "Not much to see here"},
        {name: 'Proxima C', captain: 'philips', robots: ['r2d2'], description: "A lot to see here"},
        {name: 'X', captain: 'chill', robots: ['b2'], description: "Well this is a nice place"},
        {name: 'Proxima B', captain: 'rogers', robots: ['arduino'], description: "Not much to see here"},
        {name: 'Proxima C', captain: 'philips', robots: ['r2d2'], description: "A lot to see here"},
        {name: 'X', captain: 'chill', robots: ['b2'], description: "Well this is a nice place"},
        {name: 'Proxima B', captain: 'rogers', robots: ['arduino'], description: "Not much to see here"},
        {name: 'Proxima C', captain: 'philips', robots: ['r2d2'], description: "A lot to see here"},
        {name: 'X', captain: 'chill', robots: ['b2'], description: "Well this is a nice place"},
        {name: 'Proxima B', captain: 'rogers', robots: ['arduino'], description: "Not much to see here"},
        {name: 'Proxima C', captain: 'philips', robots: ['r2d2'], description: "A lot to see here"},
        {name: 'X', captain: 'chill', robots: ['b2'], description: "Well this is a nice place"},
        {name: 'Proxima B', captain: 'rogers', robots: ['arduino'], description: "Not much to see here"},
        {name: 'Proxima C', captain: 'philips', robots: ['r2d2'], description: "A lot to see here"},
        {name: 'X', captain: 'chill', robots: ['b2'], description: "Well this is a nice place"},
        {name: 'Proxima B', captain: 'rogers', robots: ['arduino'], description: "Not much to see here"},
        {name: 'Proxima C', captain: 'philips', robots: ['r2d2'], description: "A lot to see here"},
        {name: 'X', captain: 'chill', robots: ['b2'], description: "Well this is a nice place"},
        {name: 'Proxima B', captain: 'rogers', robots: ['arduino'], description: "Not much to see here"},
        {name: 'Proxima C', captain: 'philips', robots: ['r2d2'], description: "A lot to see here"},
        {name: 'X', captain: 'chill', robots: ['b2'], description: "Well this is a nice place"},
        {name: 'Proxima B', captain: 'rogers', robots: ['arduino'], description: "Not much to see here"},
        {name: 'Proxima C', captain: 'philips', robots: ['r2d2'], description: "A lot to see here"},
        {name: 'X', captain: 'chill', robots: ['b2'], description: "Well this is a nice place"},
        {name: 'Proxima B', captain: 'rogers', robots: ['arduino'], description: "Not much to see here"},
        {name: 'Proxima C', captain: 'philips', robots: ['r2d2'], description: "A lot to see here"},
        {name: 'X', captain: 'chill', robots: ['b2'], description: "Well this is a nice place"},
        {name: 'Proxima B', captain: 'rogers', robots: ['arduino'], description: "Not much to see here"},
        {name: 'Proxima C', captain: 'philips', robots: ['r2d2'], description: "A lot to see here"},
        {name: 'X', captain: 'chill', robots: ['b2'], description: "Well this is a nice place"},
    ]

    async getPlanets(index, number){
        const end = parseInt(index) + parseInt(number)
        return this.mockPlanets.slice(index, end)
    }
}

const planetsRepositoryInstance = new PlanetRepository()
Object.freeze(planetsRepositoryInstance)

export { planetsRepositoryInstance as PlanetRepository }