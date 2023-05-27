import { render, screen } from '@testing-library/react'
import Main from '.'


describe('<main />', () => {
    it('should render the heading', () => {
        render(<Main />)

        expect(screen.getByRole('heading', { name: /react avançado/i })).toBeInTheDocument()
    })

    it('should render the heading', () => {
        const { container } = render(<Main />)

        expect(container.firstChild).toMatchSnapshot()
    })

    // it('should render colors correctly', () => {
    //     const { container } = render(<Main />)
    //     expect(container.firstChild).toHaveStyle('background-color: rgb(6, 9, 43)')

    // })
})
