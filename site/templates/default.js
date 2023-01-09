import { createApp } from 'petite-vue';
import './default.css';
import { dashToPascal } from '../scripts/utils';

// Autoload all components' css. 
import.meta.glob('/snippets/*.css', { eager: true })

// Autoload components and rename them to pascal case (my-component => MyComponent).
const autoloadComponents = () => {
  const modules = import.meta.glob('/snippets/*.js', { eager: true })
  return Object.fromEntries(
    Object.entries(modules).map(([path, component])=> {
      const name = path.split("/").pop().replace('.js', '')
      const pascalName = dashToPascal(name)
      return [pascalName, component.default]
    })
  )
}

const components = autoloadComponents()
createApp(components).mount()