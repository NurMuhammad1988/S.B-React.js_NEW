import { clients } from "../util/constans"
import { styles } from "../util/style"
import ClientCard from "./client-card"


const Clients = () => {
  return (
    <div id="clients" className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
{clients.map(client =>(
    <ClientCard key={client.id} logo={client.logo} />
))}
        </div>
    </div>
  )
}

export default Clients