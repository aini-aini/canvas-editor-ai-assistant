import Editor from '@hufe921/canvas-editor'
import cardPlugin from './ai_assistant'
import './style.css'


window.onload = function () {
    const container = document.querySelector<HTMLDivElement>('.editor')!
    const instance = new Editor(container, {
        main: []
    })
    instance.use(cardPlugin, { apiKey: 'sk-255be871772843298ccc1cc891d63ba7' })
}
