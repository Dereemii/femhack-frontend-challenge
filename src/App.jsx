import './App.css'
import { TopCountries } from './components/TopCountries'
import CustomTabs from './components/Layout/CustomTabs'
import { UsersYear } from './components/UsersYear'
import { UsersYearCountry } from './components/UsersYearCountry'

export const App = () => {
  return (
    <CustomTabs
      options={[
        <UsersYear key={0} />,
        <UsersYearCountry key={1} />,
        <TopCountries key={2} />,
      ]}
      title={['Users x Year', 'Users x Year x Country', 'Top 10 Countries']}
    />
  )
}
