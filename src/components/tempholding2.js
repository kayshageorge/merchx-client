<div>
  <Row type="flex" justify="center">
    <h3>{`$${this.props.product.price}`}</h3>
  </Row>
  <Row type="flex" justify="center">
    <ButtonGroup>
      <Button disabled>Unisex</Button>
      <Button>xs</Button>
      <Button>sm</Button>
      <Button>m</Button>
      <Button>lg</Button>
      <Button>xl</Button>
    </ButtonGroup>
  </Row>
  <Row type="flex" justify="center">
    <ButtonGroup>
      <Button disabled>Ladies</Button>
      <Button>xs</Button>
      <Button>sm</Button>
      <Button>m</Button>
      <Button>lg</Button>
      <Button>xl</Button>
    </ButtonGroup>
  </Row>
  <Row type="flex" justify="center" align="bottom">
    <Button style={{marginTop: "10px", marginBottom: "15px"}} size="large">Add to Cart</Button>
  </Row>
  <Row type="flex" justify="center" >
    <Col span={18}>
      <p style={{textAlign: "center"}}>{this.props.product.description}</p>
    </Col>
  </Row>
</div>
