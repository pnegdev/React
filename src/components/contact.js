import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
    return (
        <div className='bg-danger mt-5'>
            <h3 className='pt-5'> Contactez-nous</h3>
            <Form className='w-50 m-auto pb-5 justify-content-around'>
                <Form.Group controlId="form.Name">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Votre nom" />
                </Form.Group>
                <Form.Group controlId="form.Email">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Votre email" />
                </Form.Group>
                <Form.Group controlId="form.Textarea">
                    <Form.Label></Form.Label>
                    <Form.Control placeholder="Votre message" as="textarea" rows={3} />
                </Form.Group>
                <Button className='mt-3' variant="primary" type="submit">
                    Envoyer
                </Button>
            </Form>
        </div>
    );
}

export default Contact;