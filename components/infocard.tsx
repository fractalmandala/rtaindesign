import type {NextPage} from 'next'
import { Card, Text, Row, Col, Button} from '@nextui-org/react'

interface Props {
  title: string,
  label: string,
}

const InfoCard: NextPage<Props> = (props) => {
  const { title, label} = props;
  return (
    <Card>
      <Card.Header css={{
        position:"absolute",
        top: "5"
      }}>
        <Col>
        <Text size={16} transform="uppercase" color="white">
          {label}
        </Text>
        <Text h4 color="white">
          {title}
        </Text>
        </Col>
      </Card.Header>
    </Card>
  )
}

export default InfoCard