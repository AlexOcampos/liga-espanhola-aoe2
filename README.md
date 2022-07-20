# Web site Liga Española AoE2

## Changelog

### 1.3.0

- Admin page "featured games"

### 1.2.0

- Filter by name/discord on players list
- Get players from backend

### 1.1.0

- Featured games

### 1.0.0

- Season 3 info
- Players list
- About us

## Available Scripts

In the project directory, you can run:

### `npm install`

Prepare the project to be running

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Actualizar partidas destacadas

Update the ./utils/featured-games.json with this info:

```
{
    "date": "Jueves 07/Oct",
    "matches": [
        {
            "hour": "13:00",
            "playerA": "Poyardo de Élite (Nando AoE)",
            "playerB": "kekojones",
            "division": 3,
            "caster": "craser09",
            "casterPlatform": "twitch",
            "casterUrl": "https://www.twitch.tv/siep_s"
        },
    ]
}
```

If there aren't any featured matches, you must leave matches array empty:

```
{
    "date": "Jueves 07/Oct",
    "matches": []
}
```

Boton abrir inscripciones

```
<div className="links">
          <ButtonModern
            text="Inscribete"
            link="/inscripcion-t5"
            marginTop="0"
            fontSize="1.8em"
          />
        </div>
```
